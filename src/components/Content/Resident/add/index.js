export const Add = () => {
  return (
    <div class="content" id="Cadastrar">
      <div class="content-container">
        <div class="content-half">
          <h2 class="content-title">Cadastrar Condômino</h2>
          <div class="input input-subject edit">
            <input type="text" name="subject" required/>
            <label for="subject">Nome do Condômino</label>
          </div>
          <div class="input input-subject edit">
            <input type="text" name="subject" required/>
            <label for="subject">CPF</label>
          </div>
          <div class="input input-subject edit">
            <input type="text" name="subject" required/>
            <label for="subject">E-mail</label>
          </div>
          <div class="input input-subject edit">
            <input type="text" name="subject" required/>
            <label for="subject">Telefone</label>
          </div>
          <div class="input input-subject edit">
            <input type="text" name="subject" required/>
            <label for="subject">Data de Nascimento</label>
          </div>
        </div>

        <div class="content-half"
          // style="flex-direction: column; justify-content: space-between;margin-top: 32px;"
          >
          <div class="content-item">
            <span>Selecione um apartamento:</span>
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

          <div class="content-bottom">
            <div 
            // style="display: flex; space-between;"
            >
              <div></div>
              <div class="button">Cadastrar</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}