const config_btn = document.getElementById("settings-btn");

// Evento que permite mostrar el modal de configuración
config_btn.addEventListener("click", () => {
  // let settingContainer = document.getElementById("settings-container");
  // settingContainer.style.display = "flex";
  printModal(`
  <section>
        <form>
          <h2 class="center title">Settings</h2>
          <div class="center">
            <h3 class="room-dimensions">Room dimensions</h3>
            <div class="spinner-container">
              <input class="spinner" type="number" id="dimensions" name="dimensions" min="10" max="30">
            </div>
          </div>
          <div class="center">
            <h3>Number of obstacles</h3>
            <div class="spinner-container">
              <input class="spinner" type="number" id="obstacles" name="obstacles" min="10" max="30">
            </div>
          </div>
          <div class="center">
            <h3>Number of children per generation</h3>
            <div class="spinner-container">
              <input class="spinner" type="number" id="childrenXgeneraion" name="childrenXgeneraion" min="0" max="30">
            </div>
          </div>
          <div class="center">
            <h3>Selection percentage</h3>
            <div class="spinner-container">
              <input class="spinner" type="number" id="selection" name="selection" min="5" max="75">
            </div>
          </div>
          <div class="center">
            <h3>Initial population size</h3>
            <div class="spinner-container">
              <input class="spinner" type="number" id="iPopulation" name="iPopulation" min="10">
            </div>
          </div>
          <div class="center">
            <h3>ADN</h3>
            <div class="spinner-container">
              <input class="text" type="text" id="adn" name="adn">
            </div>
          </div>
        </form>
        <div class="btns-container limit-container">
          <button class="btn save" onclick="crearTablero(10)">Save settings</button>
        </div>
      </section>
  `);
}); 