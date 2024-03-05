import s from "./News.module.scss";
import image from "../../images/test.png"

const News = () => (
    <div className={s.news}>
        <img className={s.image} src={image} alt="Тестовое изображение"/>
        <h2 className={s.title}>Новостной заголовок</h2>
        <p className={s.paragraph}>FROG is a deflationary token with</p>
    </div>
)


export default News;