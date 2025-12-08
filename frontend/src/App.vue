<script setup>

import { ref } from 'vue';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Message from 'primevue/message';

const url = ref('');
const filename = ref('');
const loading = ref(false);
const status = ref(null); 

const downloadImage = async () => {
  if (!url.value || !filename.value){
    status.value = {severity: 'error', content: 'Please fill in both fields'};
    return;
  }

  loading.value = true;
  status.value = null;

  try {
    const response = await fetch('http://localhost:8000/download',{
      method: 'Post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({url: url.value, filename: filename.value}),
    });

    const data = await response.json()

    if (response.ok){
      status.value = {severity: 'success', content: data.message};

      url.value = '';
      filename.value = '';
    }
    else{
      status.value = {severity: 'error' , content: data.detail || 'Download failed'};
    }
  }
  catch(error){
    status.value = {severity:'error', content: 'Could not connect to backend'};
  }
  finally{
    loading.value = false;
  }

};
</script>

<template>
  <div class = "flex justify-center align-items-center min-h-screen bg-gray-100">
    <Card style="width: 25rem; overflow: hidden; margin: 2rem"> 
      <template #title>
        <div class="flex flex-column align-items-center gap-2">
            <img src="" alt="Save It Logo" style="width: 50px; height: 50px; background-color: #eee; border-radius: 50%;" />
            <span>Save It</span>
        </div>
      </template>
      <template #subtitile>Enter URL and Filename</template>
      <template #content>
        <div class="flex flex-column gap-3">
          <div class = "flex flex-column gap-2">
            <label for="url">File URL</label>
            <InputText id="url" v-model="url" />
          </div>
          <div class="flex flex-column gap-2">
            <label for="filename">Filename (no extension)</label>
            <InputText id="filename" v-model="filename" placeholder="my-image" />
          </div>
          <Button label="Download" icon = "pi pi-download" @click=downloadImage :loading="loading" />

          <Message v-if="status" :severity="status.severity" :closable="false"> 
            {{status.content}}
          </Message>
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped>
</style>
