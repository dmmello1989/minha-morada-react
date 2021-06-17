export const Add = ({ contactsList }) => {
  return (
    <div className="content content__messages">
      <div className="contacts__list">
        {contactsList.map((contact, index) => (
          <div className="contacts__item" key={`contact-${index}`}>
            <span className="contacts__name">{contact}</span>
          </div>
        ))}
      </div>

      <div className="content content--flex-column">
        <div className="message__display">
          <div className="message__line">
            <span className="contacts__name">A - 202 <strong>Hoje às 22:58</strong></span>
            <span className="message__text">Olá, boa noite.</span>
          </div>
          <div className="message__line">
            <span className="contacts__name">A - 202 <strong>Hoje às 22:59</strong></span>
            <span className="message__text">O vizinho de cima está fazendo muito barulho</span>
          </div>
          <div className="message__line">
            <span className="contacts__name contacts__name--is-user">Síndico <strong>Hoje às 23:12</strong></span>
            <span className="message__text">Entendi, vou resolver essa questão.</span>
          </div>
        </div>
        <textarea 
          rows="1" 
          cols="30" 
          id="message" 
          name="message" 
          className="message__area" 
        />
      </div>
    </div>
  )
}