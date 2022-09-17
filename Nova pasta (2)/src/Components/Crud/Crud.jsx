import { Header, Botao,  Sn, Art,} from "./Style.jsx";
import logo from './logo.png';

export function Crud(){


    return(
            
            <Header>
                    
                    <a href="https://www.youtube.com/watch?v=AXHQXdQMptM"><img width="30%" heigth="30%" src={logo} className="App-logo" alt="logo" /></a>
                    <Sn href="">
                        <p>teste</p>
                    </Sn>
                    <Art href="">
                        <p>teste</p>
                    </Art>
                    
                    


                <Botao href="" >
                        <button>teste</button>
                </Botao>
                
            </Header>
            
    )
}