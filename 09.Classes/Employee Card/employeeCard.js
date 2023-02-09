class EmployeeCard {
  #parent = null;
  #el = null;
  constructor(parentSelector, firstName, lastName, occupation) {
    // TODO : Validate data !
    this.firstName = firstName;
    this.lastName = lastName;
    this.occupation = occupation;

    this.#el = document.createElement('div');
    this.#parent = document.querySelector(parentSelector);

    this.#parent.appendChild(this.#el);
    this.render();
    this.#init();
  }

  #init() {
    this.#el.addEventListener('mouseover', (e) => {
      e.currentTarget.style.border = '2px dotted aqua';
      e.currentTarget.style.transform = 'scale(1.2)';

      e.currentTarget.addEventListener('mouseout', (e) => {
        e.currentTarget.style.border = 'none';
        e.currentTarget.style.transform = 'none';
      });
    });
  }

  getContent() {
    return `
    <div class="card">
    <img src="img_avatar.png" alt="Avatar" style="width:20%">
    <div class="container">
      <h4><b>${this.firstName} ${this.lastName}</b></h4>
      <p>${this.occupation}</p>
    </div>
  </div>  `;
  }

  render() {
    // Warning XSS attack
    this.#el.innerHTML = this.getContent();
  }
}
