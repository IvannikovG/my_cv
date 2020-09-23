import React from 'react'

const styles = {
    headerElement: {
        marginBottom: '10px',
        display: 'flex',
        background: '#f8e9dc',
        padding: '10px',
        borderRadius: '10px',
        border:"3px solid white",
        boxShadow: " 0 0 20px #777",

    },
}

function Header() {
    return (
        <div style={styles.headerElement}>
            <div class="sitemessage">
                Neueste Nachrichten der Welt.
                Die Jugend weigert sich, vom Büro aus zu arbeiten, da die Proteste zunehmen.
                Neuer offizieller Slogan der Demonstration: "Frei von Anwesenheitspflicht".
                Demonstrationsleiter Georgii Ivannikov wurde verhaftet und befindet sich nun in Haft.
                |-|
                Moscow times has published the secret interview with a person who has changed
                the professional field in three years and now successfull in a new field:
                ' I was just sitting and reading every day. After reading i drank tea, thats it.' - Georgii Ivannikov
                |-|
                British Times awards Georgii Ivannikov
                as best the second apprentice of the third waiter assistant
                |-|
                Высший суд Гвинеи опубликовал список людей потративших наибольшее
                количество времени, играя в компьютерные игры:
                1). Хиротоки Мацуяма, Япония: 12 тысяч часов, Minecraft
                2). Ахмаджон Сайтиев, Казахстан: 10 тысяч часов, World of tanks
                3). Бригитта Хайне, Германия: 9 тысяч часов, Barbie Online
                4). Георгий Иванников, Германия; 8 тысяч часов, Dota 2
                |-|

            </div>
        </div>
    )
}


export default Header