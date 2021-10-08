var homeContent = `        <div class="homeHeader"><h1>HOME</h1></div>
<div class="homeText">
    <p>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quibusdam nisi in facilis quaerat corrupti eveniet omnis aliquid consequatur, dolor quasi tempora enim hic nemo cupiditate asperiores est consequuntur! Laudantium!
    </p>
    <p>
     Eligendi pariatur ipsam rem. Tempore sunt itaque harum delectus fugiat explicabo temporibus reiciendis, at nostrum accusamus eius enim necessitatibus quas. Sunt consequuntur quam, hic eveniet qui asperiores enim sit mollitia?
    </p>
    <p>
      Distinctio saepe pariatur magni labore quas expedita quidem et voluptatem veritatis voluptates. Labore pariatur animi excepturi possimus dolores modi vel fugiat, eaque minima numquam itaque, at optio. Vero, a quam.
    </p>
</div>
<div class="imageRow">
    <div class="imageC"><img src="/images/pngkit_person-icon-png_116810.png"></div>
    <div class="imageC"></div>
    <div class="imageC"><img src="/images/pngkit_magnet-icon-png_3346497.png"></div>
</div> 
<footer></footer>`;
var aboutContent = `        <div class="homeHeader"><h1>ABOUT</h1></div>
<div class="homeText">
    <p>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quibusdam nisi in facilis quaerat corrupti eveniet omnis aliquid consequatur, dolor quasi tempora enim hic nemo cupiditate asperiores est consequuntur! Laudantium!
    </p>
    <p>
     Eligendi pariatur ipsam rem. Tempore sunt itaque harum delectus fugiat explicabo temporibus reiciendis, at nostrum accusamus eius enim necessitatibus quas. Sunt consequuntur quam, hic eveniet qui asperiores enim sit mollitia?
    </p>
    <p>
      Distinctio saepe pariatur magni labore quas expedita quidem et voluptatem veritatis voluptates. Labore pariatur animi excepturi possimus dolores modi vel fugiat, eaque minima numquam itaque, at optio. Vero, a quam.
    </p>
</div>
<footer></footer>`;
var productsContent = `        <div class="homeHeader"><h1>PRODUCTS</h1></div>
<div class="homeText">
    <p>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quibusdam nisi in facilis quaerat corrupti eveniet omnis aliquid consequatur, dolor quasi tempora enim hic nemo cupiditate asperiores est consequuntur! Laudantium!
    </p>
    <p>
     Eligendi pariatur ipsam rem. Tempore sunt itaque harum delectus fugiat explicabo temporibus reiciendis, at nostrum accusamus eius enim necessitatibus quas. Sunt consequuntur quam, hic eveniet qui asperiores enim sit mollitia?
    </p>
    <p>
      Distinctio saepe pariatur magni labore quas expedita quidem et voluptatem veritatis voluptates. Labore pariatur animi excepturi possimus dolores modi vel fugiat, eaque minima numquam itaque, at optio. Vero, a quam.
    </p>
</div>
<footer></footer>`;
var contactContent = `        <div class="homeHeader"><h1>CONTACT</h1></div>
<div class="homeText">
    <p>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quibusdam nisi in facilis quaerat corrupti eveniet omnis aliquid consequatur, dolor quasi tempora enim hic nemo cupiditate asperiores est consequuntur! Laudantium!
    </p>
    <p>
     Eligendi pariatur ipsam rem. Tempore sunt itaque harum delectus fugiat explicabo temporibus reiciendis, at nostrum accusamus eius enim necessitatibus quas. Sunt consequuntur quam, hic eveniet qui asperiores enim sit mollitia?
    </p>
    <p>
      Distinctio saepe pariatur magni labore quas expedita quidem et voluptatem veritatis voluptates. Labore pariatur animi excepturi possimus dolores modi vel fugiat, eaque minima numquam itaque, at optio. Vero, a quam.
    </p>
</div>
<footer></footer>`;

function initListeners() {
    $("nav a").click(function(e){
        // this stores the id from the anchor tag
        let aID = e.currentTarget.id;
        let contentID = aID + "Content";

        $("#app").html(eval(contentID))
    });
}


$(document).ready(function () {
    initListeners();
    $("#app").html(homeContent);
});