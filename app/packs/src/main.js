import HelloWorld from '@/components/HelloWorld.svelte'

export default () => {
  document.addEventListener('DOMContentLoaded', () => {
    const app = new HelloWorld({
      target: document.body,
      props: {
        name: 'Svelte'
      }
    });

    window.app = app;
  })
}
