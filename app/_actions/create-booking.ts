"use server"

import { db } from "../_lib/prisma"

interface CreateBookingParams {
  serviceId: string
  userId: string
  date: Date
}

const createBooking = async (params: CreateBookingParams) => {
  await db.booking.create({
    data: params,
  })
}

export default createBooking
