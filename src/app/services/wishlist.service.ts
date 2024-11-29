import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlist: any[] = [];

  addProduct(product: any): void {
    this.wishlist.push(product);
  }

  removeFromWishlist(product: any): void {
    this.wishlist = this.wishlist.filter(p => p.name !== product.name);
  }

  isInWishlist(product: any): boolean {
    return this.wishlist.some(p => p.name === product.name);
  }

  getWishlist(): any[] {
    return this.wishlist;
  }
}
