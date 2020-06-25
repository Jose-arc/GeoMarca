export class Countdown {
    public current: number = 0;
    public max: number = 50;
    public stroke: number = 15;
    public radius: number = 125;
    public semicircle: boolean = false;
    public rounded: boolean = false;
    public responsive: boolean = false;
    public clockwise: boolean = true;
    public color: string = '#45ccce';
    public background: string = '#eaeaea';
    public duration: number = 800;
    public animation: string = 'easeOutCubic';
    public animationDelay: number = 0;
    public gradient: boolean = false;
    public realCurrent: number = 0;
}