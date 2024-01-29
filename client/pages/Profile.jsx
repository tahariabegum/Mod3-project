export default function Profile ({ username, email }) {
    return (
        <div className = 'profile-page' >
            <h1 className = 'profile-title'> Welcome {username} </h1>
            <div className='profile-info'>
                <p> username: {username} </p>
                <p> email: {email} </p>
            </div>
        </div>
    )
}