export default function name() {

    const handleSubmit = (event) => {

    };

    return (
        <div>
            {/* header */}
            <div>
                {/* logo */}
                <div>
                    <h1>WindBreaker</h1>
                    <img src="./wind.svg" />
                </div>
                {/* close */}
                <button>X</button>
            </div>
            {/* input */}
            <form onSubmit={handleSubmit}>
                <input />
                <button>Search</button>
            </form>
        </div>
    )
}