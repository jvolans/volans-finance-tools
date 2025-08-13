export function formatCZK(n){return (isFinite(n)?n:0).toLocaleString('cs-CZ',{maximumFractionDigits:0})+' Kč'}
export function clamp(n,min,max){return Math.min(Math.max(n,min),max)}
export function pmnt(rate, nper, pv){ // monthly annuity payment
  if(rate===0) return pv/nper
  return pv * (rate / (1 - Math.pow(1+rate,-nper)))
}