import React, {useEffect,useState} from 'react'
// import AMA_shop from '../assets/portfolio/AMA-shop.png'
// import HolyQuran from '../assets/portfolio/HolyQuran.png'
// import KheffaStartup from '../assets/portfolio/KheffaStartup.png'
import axios from 'axios'

const APIURL = 'https://api.github.com/users/Murtaja-Albasti'



const Portfolio = () => {
  
const[user,setUser] = useState(null);
const[repos,setRepos] = useState([]);
const[loading,setLoading] = useState(true);
const[error,setError] = useState(null);

useEffect(() => {
  // Fetch GitHub user data
  axios
    .get(APIURL)
    .then((response) => {
      setUser(response.data); // Store the user data
      return axios.get(`${APIURL}/repos?sort=created`); // Fetch repositories
    })
    .then((repoResponse) => {
      setRepos(repoResponse.data); // Store repositories data
      setLoading(false); // Loading complete
    })
    .catch((err) => {
      setError(err);
      setLoading(false); // Stop loading on error
    });
}, []);
  
if (loading) {
  return <p>Loading...</p>;
}

if (error) {
  return <p>Error: {error.message}</p>;
}
//   async function getUser() {
//     try {
//         const {data}   = await axios.get(APIURL)

//         createUserCard(data)
//         getRepos(data)
//     } catch(err) {
//         if(err.response.status == 404) {
//             createErrorCard('No profile with this username')
//         }
//     }
// }

// async function getRepos(username) {
//     try {
//         const { data } = await axios(APIURL + '/repos?sort=created')

//         addReposToCard(data)
//     } catch(err) {
//         createErrorCard('Problem fetching repos')
//     }
// }

// function createUserCard(user) {
//     const userID = user.name || user.login
//     const userBio = user.bio ? `<p>${user.bio}</p>` : ''
//     const cardHTML = `
//     <div class="card">
//     <div>
//       <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
//     </div>
//     <div class="user-info">
//       <h2>${userID}</h2>
//       ${userBio}
//       <ul>
//         <li>${user.followers} <strong>Followers</strong></li>
//         <li>${user.following} <strong>Following</strong></li>
//         <li>${user.public_repos} <strong>Repos</strong></li>
//       </ul>

//       <div id="repos"></div>
//     </div>
//   </div>
//     `
//     main.innerHTML = cardHTML
    
// }

// function createErrorCard(msg) {
// const cardHTML = `
//     <div class="card">
//         <h1>${msg}</h1>
//     </div>
// `

// main.innerHTML = cardHTML
// }

// function addReposToCard(repos) {
// const reposEl = document.getElementById('repos')

// repos
//     .slice(0, 5)
//     .forEach(repo => {
//         const repoEl = document.createElement('a')
//         repoEl.classList.add('repo')
//         repoEl.href = repo.html_url
//         repoEl.target = '_blank'
//         repoEl.innerText = repo.name

//         reposEl.appendChild(repoEl)
//     })
// }

// form.addEventListener('submit', (e) => {
// e.preventDefault()

// const user = search.value

// if(user) {
//     getUser(user)

//     search.value = ''
// }
// })


  // const portfolios = [
  //   {
  //     id:1,
  //     src:AMA_shop,
  //     link:'https://github.com/Murtaja-Albasti/AMA-shop-application'
  //   },
  //   {
  //     id:2,
  //     src:HolyQuran,
  //     link:'https://github.com/Murtaja-Albasti/AMA-shop-application'
  //   },
  //   {
  //     id:3,
  //     src:KheffaStartup,
  //     link:'https://github.com/Murtaja-Albasti/SPA-kheffa-startup'
  //   },
  // ]
  return (
    <div name="portfolio" className=' bg-gradient-to-b from-black to-blue-950 w-full text-white md:h-screen '>
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-blue-950'>Portfolio</p>
          <p className=' py-6 '>Check out some of my work right here</p>
        </div>

        <div className='justify-center items-center  sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
      {user && (
        <div className='card bg-indigo-800'>
        
          <img src={user.avatar_url} alt={user.name}  className='avatar'/>
          
          <div className='user-info'>
          <h2 className=' text-2xl font-bold'>{user.name || user.login}</h2>
          {user.bio && <p>{user.bio}</p>} {/* Show bio if available */}
          <ul>
            <li>{user.followers}<strong> Followers</strong></li>
            <li>{user.following} <strong>Following</strong></li>
            <li>{user.public_repos} <strong>Public Repositories</strong></li>
          </ul>
          <div id='repos'>
          <ul>
        {repos.slice(0, 5).map((repo) => ( // Show only the first 5 repos
          <li key={repo.id}>
            <a href={repo.html_url} className='repo text-justify inline-block bg-blue-600' target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
          </div>
        </div>
        </div>
      )}
      

      </div>
        

      </div>
    </div>
  )
}

export default Portfolio