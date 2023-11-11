export default function SocialIcon(){
    
    const icons = [
        {
            className: 'icon-mail',
            href: 'mailto:bryan021@hotmail.be',
            type: 'solid',
            name: 'envelope',
            id: 1,
        },
        {
            className: 'icon-tel',
            href: 'tel:+320000000000',
            type: 'solid',
            name: 'phone',
            id: 2,
        },
        {
            className: 'icon-insta',
            href: 'https://instagram.com/bryanschttrs',
            type: 'logo',
            name: 'instagram-alt',
            id: 3,
        },
        {
            className: 'icon-github',
            href: 'https://github.com/bSchutters',
            type: 'logo',
            name: 'github',
            id: 4,
        },
        {
            className: 'icon-discord',
            href: 'https://github.com/bSchutters',
            type: 'logo',
            name: 'discord',
            id: 5,
        },
        {
            className: 'icon-devto',
            href: 'https://github.com/bSchutters',
            type: 'logo',
            name: 'dev-to',
            id: 6,
        },
        
    ]

    


    const listIcons = icons.map((icon, index) => 

          
            <a  key={index} className={icon.className} href={icon.href}><box-icon type={icon.type} name={icon.name} size="32px"></box-icon></a>
       
        )

        


    
    
    return(
        <>
        <ul>{listIcons}</ul>
        </>
    )
}