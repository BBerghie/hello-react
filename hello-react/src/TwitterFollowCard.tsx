import {User} from './entity/User'

export function TwitterFollowCard({user}:User){
    const oldImgURL= "https://xsgames.co/randomusers/avatar.php?g=pixel"
    const userImageSrc = `https://xsgames.co/randomusers/avatar.php?${user.userIMG}`
    
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    src={userImageSrc} 
                    alt="An Avatar" 
                    className='tw-followCard-avatar'/>
            <div>
                <strong className='tw-followCard-info'>
                    Nombre del usuario
                </strong>
                <span className='tw-followCard-infoUserName'>@userName</span>
            </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}