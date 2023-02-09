import { ThemeButtom } from './styles';
import { Sun, Moon } from 'phosphor-react';

interface Props{
    changeTheme(): void;
    theme: string;
}


export function ThemeButton({changeTheme, theme}: Props) {
    const isLight = theme == 'light' ? true : false;
    return(
        <ThemeButtom>
            {isLight ?
                 <Moon size={30} onClick={changeTheme}/> 
                 :<Sun size={30} onClick={changeTheme}/>
                 }
        </ThemeButtom>
         
    )
}