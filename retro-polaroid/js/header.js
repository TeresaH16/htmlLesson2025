document.addEventListener("DOMContentLoaded", function () {
  const header = `
    <header>
      <h1>Polaroid Classic</h1>
      <nav>
        <ul>
          <li><a href='index.html'>Home</a></li>
          <li><a href='about.html'>About</a></li>
          <li><a href='shop.html'>Shop</a></li>
          <li><a href='contact.html'>Contact</a></li>
        </ul>
      </nav>
    </header>
  `;
  document.body.insertAdjacentHTML("afterbegin", header);
});