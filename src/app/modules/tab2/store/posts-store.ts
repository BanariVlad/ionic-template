import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { delay, tap } from 'rxjs';

export interface PostsState {
  posts: any[];
  loading: boolean;
}

@Injectable()
export class PostsStore extends ComponentStore<PostsState> {
  private loading$ = this.select((state) => state.loading);
  private posts$ = this.select((state) => state.posts);

  readonly vm$ = this.select(this.loading$, this.posts$, (loading, posts) => ({
    loading,
    posts,
  }));

  setLoading = this.updater((state) => ({
    ...state,
    loading: true,
  }));

  setPosts = this.updater((state, posts: any[]) => ({
    ...state,
    posts,
    loading: false,
  }));

  constructor() {
    super({ posts: [], loading: true });
  }

  getPosts = this.effect((trigger$) =>
    trigger$.pipe(
      tap((posts) => this.setLoading()),
      delay(2000),
      tap((posts) =>
        this.setPosts([].constructor(Math.round(Math.random() * 20)))
      )
    )
  );
}
