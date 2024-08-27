<template>
  <div class="contact-page">
    <h1>Contact Us</h1>
    <ul>
      <li>Email: dilara@company.com</li>
      <li>Phone: 534 698 88 52</li>
      <li>Address: Yenimahalle,Ankara ,Türkiye</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ContactPage'
}
</script>

<style scoped>
.contact-page {
  padding: 20px;
}

.contact-page h1 {
  color: #27ae60;
}

.contact-page ul {
  list-style-type: none;
  padding: 0;
}

.contact-page ul li {
  margin: 5px 0;
}
</style>
