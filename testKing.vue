<template>
  <div class="footer">
    <div class="footer-container">
      <div class="footer-section">
        <h4>CONTACT US</h4>
        <p>
          Our Travel Advisors are available to assist you by phone at
          <a href="tel:+355692614270 ">+355692614270</a> 
        </p>
        <p>You can also chat or email us.
            <a style="cursor: pointer; " href="email:Nezajditi@gmail.com">Nezajditi@gmail.com </a> 
        </p>
      </div>
      <div class="footer-section">
        <h4>HELPFUL LINKS</h4>
        <ul>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Travel Tips</a></li>
          <li><a href="#">Destinations</a></li>
          <li><a href="#">Packing Checklist</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>SERVICES</h4>
        <ul>
          <li><a href="#">Tour Packages</a></li>
          <li><a href="#">Travel Insurance</a></li>
          <li><a href="#">Guided Tours</a></li>
          <li><a href="#">Airport Transfers</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>FOLLOW US</h4>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
    </div>
</div>

</template>

<script>

</script>


<style scoped>
.footer {
  background-color: #333;
  color: #fff;
}

.footer-container {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer-section {
  width: 25%;
}

.footer-section h4 {
  font-size: 18px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li a {
  color: #fff;
  text-decoration: none;
}

.footer-section ul li a:hover {
  text-decoration: underline;
}
</style>
