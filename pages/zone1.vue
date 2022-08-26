<script>
export default {
  mounted() {
    let formkeepEmbedScript = document.createElement('script')
    formkeepEmbedScript.setAttribute('src', 'https://formkeep-production-herokuapp-com.global.ssl.fastly.net/formkeep-embed.js')
    document.head.appendChild(formkeepEmbedScript)

    const formkeepEmbed = document.querySelector('#formkeep-embed')

    formkeepEmbed.addEventListener('formkeep-embed:submitting', _event => {
      console.log('Submitting form...')
    })

    formkeepEmbed.addEventListener('formkeep-embed:submitted', _event => {
      console.log('Submitted form...')
    })
  }
}
</script>

<template>
  <div>
    <h1 style="text-align: center">Evénements - BeyondZero Academy - Zone1</h1>
    <div id="formkeep-embed" data-formkeep-url="https://formkeep.com/p/1a11ac64a715b8dedd57245ad2d5dff6?embedded=1"></div>
  </div>
</template>
