export default function Profile ({ username, email }) {
    return (
        <div>
            <h1> Welcome {username} </h1>
            <p> username: {username} </p>
            <p> email: {email} </p>
        </div>
    )
}