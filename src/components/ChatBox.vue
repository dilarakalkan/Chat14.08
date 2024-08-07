<script>
export default {
  name: 'ChatBox',
  data: () => ({

 
    text: ''
  }),
  methods: {


    onSubmit(event) {

     
      this.$emit("submit", event, this.text);
      this.text = '';
    }
  }
}
</script>