import Title from "../src/Title";
import Contents from "../src/Contents";

function Home(){
    return(
    <div>
        <Title heading ="MAKERERE BLOG" />
        <Contents details=" this is a very nice blog"/>
        <br/>

        <Title heading ="UGANDA MARTYRS BLOG" />
        <Contents details=" this is a very nice blog"/>
        <br/>

        <Title heading ="UGANDA CHRISTIAN UNIVERSITY BLOG" />
        <Contents details=" this is a very nice blog"/>
        <br/>
    </div>
    );
};
export default Home;
