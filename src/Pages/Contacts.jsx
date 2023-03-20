const Contacts = () => {
    return (  <main className="section">
    <div className="container">
            <h1 className="title-1">Contacts</h1>

            <ul className="content-list">
                <li className="content-list__item">
                    <h2 className="title-2">Location</h2>
                    <p>Vanadzor, Armenia</p>
                </li>
                <li className="content-list__item">
                    <h2 className="title-2">Telegram / WhatsApp</h2>
                    <p><a href="tel:+37499844540">+374 (99) 84-45-40</a></p>
                </li>
                <li className="content-list__item">
                    <h2 className="title-2">Email</h2>
                    <p><a href="mailto:muradyan1991narek@mail.ru">muradyan1991narek@mail.ru</a></p>
                </li>
            </ul>

    </div>
</main> );
}
 
export default Contacts;