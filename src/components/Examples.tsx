import Example from "./Example";
import BlockWrapper from "./BlockWrapper";

const Examples = () => {

    return (
        <BlockWrapper id="projects" >
            <div className="flex flex-col">
                <h1 className="text-[60px] inline mb-7 text-left">My Projects</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px]">
                    <Example 
                        photo="https://mini.s-shot.ru/1920x1200/JPEG/1920/Z240/?https%3A%2F%2Fdragodui.github.io%2Fto-do-list-on-react%2F"
                        siteLink="https://dragodui.github.io/to-do-list-on-react/"
                        githubLink="https://github.com/Dragodui/to-do-list-on-react"
                        title="Todo list"
                    />
                    <Example 
                        photo="https://mini.s-shot.ru/1920x1200/JPEG/1920/Z150/?https%3A%2F%2Fdragodui.github.io%2Freact-sneakers%2F" 
                        siteLink="https://dragodui.github.io/react-sneakers/"
                        githubLink="https://github.com/Dragodui/react-sneakers"
                        title="React-sneakers"
                    />
                    <Example 
                        photo="https://mini.s-shot.ru/1920x1200/JPEG/1920/Z160/?https%3A%2F%2Fdragodui.github.io%2Fcurrency-converter-on-React%2F"
                        githubLink="https://github.com/Dragodui/currency-converter-on-React"
                        siteLink="https://dragodui.github.io/currency-converter-on-React/"
                        title="Currency converter"
                    />
                    <Example 
                        photo="https://mini.s-shot.ru/1920x1200/JPEG/1920/Z120/?https%3A%2F%2Fdragodui-weather-app.netlify.app%2F"
                        siteLink="https://dragodui-weather-app.netlify.app"
                        githubLink="https://github.com/Dragodui/weather-app"
                        title="Weather App"
                    />
                </div>
            </div>
        </BlockWrapper>
    );
};

export default Examples;