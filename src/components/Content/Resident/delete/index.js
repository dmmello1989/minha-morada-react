export const Delete = () => {
  return (
    <div class="content" id="Excluir">
      <div class="content-container">
        <div class="content-half">
          <h2 class="content-title">Excluir Condômino</h2>
          <div class="input input-subject edit">
            <input type="text" name="subject" required/>
            <label for="subject">Nome do Condômino</label>
          </div>
          <div class="content-item">
            <span>Ou selecione um apartamento:</span>
            <div class="select">
              <select name="apartment" id="apartment">
                <option value="0">Apartamentos:</option>
                <option value="1">101</option>
                <option value="2">102</option>
                <option value="3">103</option>
                <option value="4">104</option>
                <option value="5">201</option>
                <option value="6">202</option>
                <option value="7">203</option>
                <option value="8">204</option>
              </select>
            </div>
          </div>

          <div class="content-item">
            <span>Selecione o bloco:</span>
            <div class="select">
              <select name="block" id="block">
                <option value="0">Bloco:</option>
                <option value="1">A</option>
                <option value="2">B</option>
                <option value="3">C</option>
                <option value="4">D</option>
              </select>
            </div>
          </div>

        </div>

        <div class="content-half">
          <div class="card">
            <div class="card-left">
              <img src="../../assets/icons/person/person1.svg" alt="Person Icon"/>
            </div>
            <div class="card-right">
              <p class="card-name">Maria Silva</p>
              <div>
                <span class="card-key">CPF:</span>
                <span class="card-value">123.243.225-34</span>
                <span class="card-key">Data Nasc.:</span>
                <span class="card-value">05/04/1987</span>
              </div>
              <div>
                <span class="card-key">E-mail:</span>
                <span class="card-value">maria@gmail.com</span>
              </div>
              <div>
                <span class="card-key">Telefone:</span>
                <span class="card-value">(48) 3210-0123 / (48) 9999-9999</span>
              </div>
            </div>
          </div>

          <div class="content-item">
            <div class="button" 
            // style="width: 350px; background-color: #FA2E27;"
            >
              Excluir Condômino
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}