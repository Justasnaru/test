class ApartmentCardComponent {
    static USD_EUR = 0.87;
  
    constructor(props) {
      this.props = props;
  
      this.init();
    }
  
    init = () => {
      const { type, owner, roomCount, squares, address, price, imgSrc, onDelete } = this.props;
      const { fullname, email, phone } = owner;
      const { amount, currency } = price;
  
      const finalPrice = currency === '$' ? amount * ApartmentCardComponent.USD_EUR : amount;
      const formatedPrice = Math.round(100 * finalPrice) / 100 + ' €';
  
      this.htmlElement = document.createElement('article');
      this.htmlElement.className = 'card shadow';
      this.htmlElement.innerHTML = `
      <img src="${imgSrc}" class="card-img-top"/ height="200px" style="object-fit: cover">
      <div class="card-body">
        <h2 class="h5">${type.toUpperCase()}</h2>
        <ul>
          <li>
            <span>Adress</span>:
            <strong>${address}</strong>
          </li>
          <li>
          <span>Rooms</span>:
          <strong>${roomCount}</strong>
        </li>
          <li>
            <span>Squares</span>:
            <strong>${squares}</strong>
          </li>
          <li>
          <span>Owner</span>:
          <strong> <br> 🏠 ${fullname} <br> 📧 ${email} <br> 📞 ${phone}</strong>
        </li>
          <li>
            <span>Price</span>:
            <strong>${formatedPrice}</strong>
          </li>
        </ul>
        <div class="text-center">
          <button class="btn btn-danger">Ištrinti</button>
        </div>
      </div>`;
      const btn = this.htmlElement.querySelector('.btn');
      btn.addEventListener('click', onDelete);
    }
  }