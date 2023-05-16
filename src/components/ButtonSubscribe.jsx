import { useState } from 'react'


function Button() {

    const [subscribe, setSubscribe] = useState(false)

    return (
        <button onClick={() => setSubscribe(!subscribe)}>

            {
                subscribe ? "Suscrito" : "Suscribirse"
            }

        </button>
    )
}

export default Button