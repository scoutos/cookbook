## Upload CSV to Scout Collection

This notebook demonstrates how to index a CSV file into a Scout collection.

The example use case presented here involves adding a CSV file that contains a list of queries along with their expected responses. This functionality can be applied to various applications such as Relevance and Generation (RAG) Apps, model fine-tuning, semantic clustering, and more.

Each row of the CSV will be stored as a separate document. The `text` field will be indexed for semantic search purposes. The `id` serves as the unique identifier for each document; if a document with the same `id` already exists, the new entry will overwrite the existing document. The `title` field of the document determines the title displayed in the dashboard.

### Document Format

When creating documents, the following fields are required:

- `id`: A unique identifier for the document. It should be formatted as a string.
- `text`: The main content of the document to be indexed. It should be formatted as a string.
- `title`: The title of the document as it will appear in the dashboard. It should be formatted as a string.

Here is an example of a Pydantic model representing the document structure:

```python
from pydantic import BaseModel

class Document(BaseModel):
    id: str
    text: str
    title: str
    # Any additional keys and their values will be saved as metadata.
    # The metadata can be of any valid datatype that is supported by JSON.
```

Please note that any additional keys and their corresponding values included in the document will be saved as metadata. The metadata can consist of any valid datatype that JSON supports.


### Set the collection id and your orgs secret key, which can be found on the settings page of the dashboard.


```python
COLLECTION_ID = ''
API_KEY = ''
```

### import libraries and set logger



```python
import pandas as pd
import json
import logging

logger = logging.getLogger(__name__)
```

### import csv and add a few columns



```python
df = pd.read_csv("curations.csv")

# Add columns to the dataframe

# 'id' serves as the unique identifier for the document. It will upsert the document if it already exists.
df["id"] = df["query"]

# 'title' is displayed as the title on the Scout dashboard.
df["title"] = df["query"]

# 'text' is the content that is embedded and indexed for vector search.
df["text"] = df["query"]

# The following columns don't have a specific function in relation to Scout.
# They will be set as metadata on the document, which can be used for filtering and sorting.
df["category"] = df["category"]
df["expected_response"] = df["expected_response"]

df
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>query</th>
      <th>expected_response</th>
      <th>category</th>
      <th>id</th>
      <th>title</th>
      <th>text</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>What’s Alex dogs name?</td>
      <td>Wilbur</td>
      <td>pets</td>
      <td>What’s Alex dogs name?</td>
      <td>What’s Alex dogs name?</td>
      <td>What’s Alex dogs name?</td>
    </tr>
    <tr>
      <th>1</th>
      <td>What is the capital of SC?</td>
      <td>Columbia</td>
      <td>geography</td>
      <td>What is the capital of SC?</td>
      <td>What is the capital of SC?</td>
      <td>What is the capital of SC?</td>
    </tr>
  </tbody>
</table>
</div>



convert df to list and post to scout index document endpoint



```python
import requests

BASE_URL = "https://api.scoutos.com"

url = f"{BASE_URL}/v1/collections/{COLLECTION_ID}/documents"

headers = {"Content-Type": "application/json", "Authorization": f"Bearer {SECRET_KEY}"}

## convert to list of json objects
documents = df.to_dict(orient="records")


body = {"documents": documents}


response = requests.post(url, headers=headers, data=json.dumps(body))

response.raise_for_status()

res = response.json()


## Add the index_job to the dataframe for display purposes


df["index_job"] = res["jobs"]

df
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>query</th>
      <th>expected_response</th>
      <th>category</th>
      <th>id</th>
      <th>title</th>
      <th>text</th>
      <th>index_job</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>What’s Alex dogs name?</td>
      <td>Wilbur</td>
      <td>pets</td>
      <td>What’s Alex dogs name?</td>
      <td>What’s Alex dogs name?</td>
      <td>What’s Alex dogs name?</td>
      <td>{'id': '133c28ed-2660-4dd9-99a7-ffcdbf61a2f6'}</td>
    </tr>
    <tr>
      <th>1</th>
      <td>What is the capital of SC?</td>
      <td>Columbia</td>
      <td>geography</td>
      <td>What is the capital of SC?</td>
      <td>What is the capital of SC?</td>
      <td>What is the capital of SC?</td>
      <td>{'id': 'fbd17776-5567-4e0e-94c8-e60c8673c4bd'}</td>
    </tr>
  </tbody>
</table>
</div>



# 💎🤲  Success!! you should see the documents in your collection on the Scout dashboard.

