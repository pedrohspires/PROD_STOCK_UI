import { IconType } from 'react-icons';

const MenuItem = ({ children, Icon, link }: { children: React.ReactNode, Icon: IconType, link: string }): React.ReactNode => {
    return (
        <li>
            <a href={link} onClick={e => !link && e.preventDefault()} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                {children}

                <Icon className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white " />
            </a>
        </li>
    )
}

MenuItem.Title = ({ children }: { children: React.ReactNode }): React.ReactNode => {
    return (
        <span className="ms-3">{children}</span>
    )
}

export default MenuItem;