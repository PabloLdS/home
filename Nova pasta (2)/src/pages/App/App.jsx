import { Crud } from "../../Components/Crud/Crud.jsx";
import { Container, Page, Footer } from "./Style.jsx";
import footer from '../App/footer.png';


 
export function App(){
    return(
        <>
            <Page>
                <Container>
                    <Crud/>
                    
                   
                </Container>
                <Footer>
                <img heigth="100%" width="100%" src={footer} alt="" />
                    </Footer>
            </Page>      
        </>
    )
}