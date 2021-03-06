import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

/**
 * 
 * @param {NextRequest} request 
 * @returns 
 */
export function middleware(request) {
  const shouldHandleLocale =
    !PUBLIC_FILE.test(request.nextUrl.pathname) &&
    !request.nextUrl.pathname.includes('/api/') &&
    request.nextUrl.locale === 'default'

  return shouldHandleLocale
    ? NextResponse.redirect(`/en${request.nextUrl.pathname}`)
    : undefined
}