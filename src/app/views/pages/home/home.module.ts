import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { RouterModule } from '@angular/router';
import { TopMusicComponent } from './top-music/top-music.component';
import { ConversationComponent } from './conversation/conversation.component';
import { PostsComponent } from './posts/posts.component';
import { ChatComponent } from './chat/chat.component';



@NgModule({
  declarations: [HomeComponent, TopMusicComponent, ConversationComponent, PostsComponent, ChatComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
			{
				path: '',
				component: HomeComponent
			},
		]),
  ]
})
export class HomeModule { }
