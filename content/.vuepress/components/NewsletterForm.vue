<template>
  <section>
    <h3 id="newsletter">Newsletter</h3>
    <form method="post" action="https://newsletter.chaostreff-flensburg.de/subscription/form" class="listmonk-form">
      <div>
        <input type="hidden" name="nonce" />
        <p><input type="email" name="email" required placeholder="E-Mail" /></p>
        <p><input type="text" name="name" placeholder="Name (optional)" /></p>

        <p>
          <input hidden id="31061" type="checkbox" name="l" checked value="31061148-d1af-45fd-a01b-fea8a2f9bf67" />
        </p>

        <p><input type="submit" value="Abonnieren" /></p>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "NewsletterForm"
}
</script>

<style scoped>
input[type=text], input[type=email] {
  font-size: 16px;
  line-height: 28px;
  padding: 8px 16px;
  width: 95%;
  min-height: 44px;
  border: unset;
  border-radius: 4px;
  outline-color: rgb(84 105 212 / 0.5);
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(60, 66, 87, 0.16) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px;
}
input[type=submit]{
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}
</style>
