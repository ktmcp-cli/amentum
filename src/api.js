import axios from 'axios';
import { getConfig } from './config.js';

function getBaseURL() {
  const configuredUrl = getConfig('baseUrl');
  return configuredUrl || '';
}

function getHeaders() {
  const headers = {
    'Content-Type': 'application/json'
  };

  const apiKey = getConfig('apiKey');
  if (apiKey) {
    headers['Authorization'] = `Bearer ${apiKey}`;
  }

  return headers;
}

async function request(endpoint, method = 'GET', data = null) {
  const baseURL = getBaseURL();
  try {
    const config = {
      method,
      url: `${baseURL}${endpoint}`,
      headers: getHeaders()
    };

    if (data) {
      config.data = data;
    }

    const response = await axios(config);
    return response.data;
  } catch (error) {
    if (error.response?.data) {
      throw new Error(`API Error: ${JSON.stringify(error.response.data)}`);
    }
    throw new Error(`Request failed: ${error.message}`);
  }
}

// ============================================================
// API Methods
// ============================================================

/**
 * Compute atmospheric density and temperatures

 */
export async function app_api_endpoints_JB2008_sample_atmosphere(params = {}) {
  const endpoint = '/jb2008';
  return await request(endpoint, 'GET', params);
}

/**
 * Compute atmospheric composition, density, and temperatures

 */
export async function app_api_endpoints_NRLMSISE00_sample_atmosphere(params = {}) {
  const endpoint = '/nrlmsise00';
  return await request(endpoint, 'GET', params);
}

/**
 * Forecast winds, ion and molecular densities, and temperatures in the atmosphere

 */
export async function app_api_wfs_endpoints_WFS_get_values(params = {}) {
  const endpoint = '/wam-ipe';
  return await request(endpoint, 'GET', params);
}

