import {Component,trigger,state,style,transition,animate,keyframes, group} from '@angular/core';

@Component ({
	selector:'animation',
	template:`<div class='container'>
				<h2>{{title}}</h2>
				<div [@lightsOnOff]="roomState" class="room"></div>
				<button (click)="toggleLights()" class='btn btn-primary'>Toggle</button>
				<h2>automatic property calculation</h2>
					<div [@hightOnOff]="heightFULL">
						<br/>
						<br/>
						<br/>
						<br/> 
						<br/>
						<br/>	
					</div> 
				
				<button (click)="heigthToggle()">Height toggle</button> 
				 
			  </div>`,
	styles:[`.room{
				margin:10px;
				height:200px;
				width:200px;
				background-color:black;
				border:1px solid black;
			}`],
	animations:[trigger('lightsOnOff',[
					state('off',style({
							backgroudColor:'black'
					})),
					state('on',style({
						backgroundColor:'white'
					})),
					transition('off=>on',[animate('2s')]),
					transition('on=>off',[animate('2s')])

					]),
				trigger('hightOnOff',[
					state('fullHeight',style({
						backgroundColor:'black',
						width:'200px',
						height:'*'
					})),
					state('noHeight',style({
						width:'200px',
						height:0
					})),
					transition('fullHeight<=>noHeight',[animate('2s')])
					])
	]
})

export class animationComponent{
	public title = 'Animation template';
	public roomState : string = 'off';
	public heightFULL : string = 'fullHeight';
	toggleLights(){
		this.roomState = this.roomState==="off"?"on":"off"
	}
	heigthToggle(){
		this.heightFULL = this.heightFULL==="fullHeight"?"noHeight":"fullHeight";
	}
}