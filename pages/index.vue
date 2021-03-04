
<template>
<b-container fluid class="container-fluid">
  <div class="image-fluid">
      <b-img src="~/assets/images/placeholder-fluid@2x.jpg" fluid alt="Responsive image"></b-img>
  </div>
  <b-container class="container-content">
    <b-col md="8">
      <h1>Headline 1</h1>
      </b-col>
      <b-col md="10">
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et </p>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur </p>
      </b-col>
      <b-row>
      <b-col>
        <b-img center thumbnail fluid src="~/assets/images/martin-widenka-c0ViYpsmUrg-unsplash.jpg" alt="Image 1"></b-img>
      </b-col>
      <b-col>
        <b-img center thumbnail fluid src="~/assets/images/dose-juice-sTPy-oeA3h0-unsplash.jpg" alt="Image 2"></b-img>
      </b-col>
      <b-col>
        <b-img center thumbnail fluid src="~/assets/images/danist-n-3Pn7Ybe-s-unsplash.jpg" alt="Image 3"></b-img>
      </b-col>
    </b-row>
    </b-container>
  </b-container fluid>
</template>


<script>
export default {
  mounted () {
    const links = document.querySelectorAll("a");
    
    for (const link of links) {
      link.addEventListener("click", clickHandler);
    }
    
    function clickHandler(e) {
      e.preventDefault();
      const href = this.getAttribute("href");
    
      document.querySelector(href).scrollIntoView({
        behavior: "smooth"
      });

      $('#test').offset('200');
   }
  }
}
</script>

<style>


.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
