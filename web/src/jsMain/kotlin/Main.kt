import androidx.compose.runtime.*
import org.jetbrains.compose.web.dom.*
import org.w3c.dom.HTMLInputElement
import org.jetbrains.compose.web.renderComposable
import org.jetbrains.compose.web.css.*

fun main() {
    renderComposable(rootElementId = "root") {
        Div(
            { 
                id("header")
                style { 
                    padding(25.px)
                    alignSelf(AlignSelf.Center)
                } 
            }
        ) {
            H1(
                {
                    style { 
                        alignSelf(AlignSelf.Center)
                    }   
                }
            ) {
                Text("Live Long and Prosper")
            }
        }

        Div(
            { 
                id("body")
                style { 
                    alignSelf(AlignSelf.Center)
                } 
            }
        ) {
            Img(
                src = "/images/brandon.png"
            ) {
                id("self-picture")
                style {
                    borderRadius(250.px)
                    width(200.px)
                    height(250.px)
                    alignSelf(AlignSelf.Center)
                }
            }
            H2(
                {
                    style { 
                        alignSelf(AlignSelf.Center)
                    }   
                }
            ) {
                Text("Brandon Neal Duvall")
            }
            H3({
                // Can include styles from stylesheet gonna dig and learn how to do this
                // classes(WtTexts.wtText1, WtOffsets.wtTopOffset24)
            }) {
                Text("Software Engineer")
            }
        }
        
        Div(
            { 
                id("footer")
                style { 
                    padding(25.px)
                    alignSelf(AlignSelf.Center)
                } 
            }
        ) {
            A(
                href = "https://github.com/TheAmazingBnD"
            ) { 
                Img(
                    src = "/images/gitHub.png"
                ) {
                    id("social-icon")
                    style {
                        padding(25.px)
                        width(40.px)
                        height(40.px)
                        alignSelf(AlignSelf.Center)
                    }
                }
            }
            A(
                href = "https://twitter.com/TheAmazingBnD/"
            ) { 
                Img(
                    src = "/images/twitter.png"
                ) {
                    id("social-icon")
                    style {
                        padding(25.px)
                        width(40.px)
                        height(40.px)
                        alignSelf(AlignSelf.Center)
                    }
                }
            }
            A(
                href = "https://www.linkedin.com/in/brandon-duvall-893b84130"
            ) { 
                Img(
                    src = "/images/linkedIn.png"
                ) {
                    id("social-icon")
                    style {
                        padding(25.px)
                        width(40.px)
                        height(40.px)
                        alignSelf(AlignSelf.Center)
                    }
                }
            }
            A(
                href = "https://www.youtube.com/channel/UCSyaRPNKNiIUrjIhhMsldww"
            ) { 
                Img(
                    src = "/images/youtube.png"
                ) {
                    id("social-icon")
                    style {
                        padding(25.px)
                        width(160.px)
                        height(40.px)
                        alignSelf(AlignSelf.Center)
                    }
                }
            }
        }
    }
}
