/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your appliction state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_RRS,
  LOAD_RRS_SUCCESS,
  LOAD_RRS_ERROR,     
/////////////////////
  LOAD_EP_SUCCESS,
  LOAD_EP,
  LOAD_EP_ERROR, 
/////////////////////
  LOAD_SHOP_SUCCESS,
  LOAD_SHOP,
  LOAD_SHOP_ERROR,  
/////////////////////
  LOAD_SHOPIMG_SUCCESS,
  LOAD_SHOPIMG,
  LOAD_SHOPIMG_ERROR,      
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadRrs() {
  return {
    type: LOAD_RRS,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function rrsLoaded(rrs) {
  return {
    type: LOAD_RRS_SUCCESS,
    rrs,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function rrsLoadingError(error) {
  return {
    type: LOAD_RRS_ERROR,
    error,
  };
}
///////////////////////////////////////////////////////////////////////
export function loadEp() {
  return {
    type: LOAD_EP,
  };
}

export function epLoaded(ep) {
  return {
    type: LOAD_EP_SUCCESS,
    ep,
  };
}

export function epLoadingError(eperror) {
  return {
    type: LOAD_EP_ERROR,
    eperror,
  };
}
///////////////////////////////////////////////////////////////////////
export function loadShop(placeid) {
    //console.log("from loadShop: "+placeid)
  return {
    type: LOAD_SHOP,
    placeid,  
  };
}

export function shopLoaded(shop) {
  return {
    type: LOAD_SHOP_SUCCESS,
    shop,
  };
}

export function shopLoadingError(shoperror) {
  return {
    type: LOAD_SHOP_ERROR,
    shoperror,
  };
}
///////////////////////////////////////////////////////////////////////
export function loadShopimg(photo_reference) {
    //console.log("from loadShop: "+placeid)
  return {
    type: LOAD_SHOPIMG,
    photo_reference,  
  };
}

export function shopimgLoaded(shopimg) {
  return {
    type: LOAD_SHOPIMG_SUCCESS,
    shopimg,
  };
}

export function shopimgLoadingError(shopimgerror) {
  return {
    type: LOAD_SHOPIMG_ERROR,
    shopimgerror,
  };
}
