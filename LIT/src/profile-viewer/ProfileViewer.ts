import { CSSResultGroup, html, LitElement } from "lit";
import { style } from "./css/style.css"
import { map } from "lit/directives/map"


const skills = [
    {
        name: 'Javascript',
        level: 'Intermediate',
        color: '#ead72cff'
    },
    {
        name: 'Typescript',
        level: 'Advanced',
        color: 'rgb(48, 234, 7)'
    },
    {
        name: 'CSS',
        level: 'beginer',
        color: 'rgba(130, 10, 235, 0.92)'
    },
    {
        name: 'MobX',
        level: 'noob',
        color: 'rgb(10, 241, 249)'
    },
    {
        name: 'Automation Testing',
        level: 'Advanced',
        color: 'rgb(48, 234, 7)'
    }

];



export class ProfileViewer extends LitElement {

    public static readonly styles = [style];

    renderIntro() {
        return html`
            <div>
               <p>
                    Hi! I am Vinod Lohana, and I am trying to learn
                    LIT elements with my Intro card information.
                    For one who has conquered his mind, 
                    a mind is best of friends, but for one who has failed to do so, a mind is the greatest enemy.
               </p>
            <div>
        `
    }




    renderAvatar() {

        return html`
            <img class="avatar" src="../public/images/luffy-bsics.jpg" alt="profile picture"/>
        `
    }

    renderSkillSet() {
        return html`
           <div class="skill-set">
                ${map(skills, (skill) => {
            return this.renderSkills(skill.name, skill.level, skill.color)
        })} 
           </div>
        `

    }
    renderSkills(name: string, level: string, color: string) {
        return html`
            <button style="background-color: ${color}";>
                    <span>${name}</span>
                    <span>${level === "Advanced" ? "💪" : level === "Intermediate" ? "😎" : level === "beginer" ? "😇" : level === "noob" ? "😅" : ""}</span>
            </button>
        `
    }

    protected render() {
        return html`
            <div class="profile">
                ${this.renderAvatar()}
                ${this.renderIntro()}
                ${this.renderSkillSet()}
            </div>

        `
    }

}