const Offline = () => {
    return (
        <div className="offline-container">
            <div className="emoji">📡🚫</div>
            <h1>Oops! You're Offline</h1>
            <p>Looks like your internet took a coffee break ☕<br />
                Please check your connection and try again.</p>
            <button onClick={() => window.location.reload()}>🔄 Retry</button>
        </div>

    )
}

export default Offline;