// Centre container

function CentreContainer(content) {
    if (content === "canvas") return (
        <>
            <canvas id="canvas"></canvas>
            <div><p></p></div>
        </>
    )
}

function Login() {
    return (
        <>  
            <label for="usernameInput">Username: </label>
            <input type="text" id="usernameInput"></input>

            <label for="passwordInput">Password: </label>
            <input type="text" id="passwordInput"></input>
        </>
    )
}

function Content() {
    return (
        <>
            <LeftSidebar />
            <CentreContainer />
            <RightSidebar />

        </>
    )
}

function App() {
    return (
        <>
            <Header />
            <Content />

        </>
    )
}

export default App