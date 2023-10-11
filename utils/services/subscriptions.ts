import axios from "axios";
import { Subscription } from "../types/types";

const BASE_URL = "/api/subscriptions"; // Replace with your backend API base URL

// Get  subscription
export function getSubscriptionsAPI() {
  return axios.get(`${BASE_URL}`);
}
// Add a subscription
export function addSubscriptionAPI(sub: Subscription) {
  return axios.post(`${BASE_URL}`, {subscription: sub});
}

// Remove a subscription
export function removeSubscriptionAPI(id: string | undefined) {
  return axios.delete(`${BASE_URL}/${id}`);
}
