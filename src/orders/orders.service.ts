import { Injectable } from '@nestjs/common';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma.service';
import NormalizedResponse from 'src/utils/normalized.response';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) { }

  public async create(createOrderDto: CreateOrderDto) {
    const createUser = new NormalizedResponse('Order ${createOrderDto.order_number} has been created',
      await this.prisma.order.create({
        data: {
          order_number: createOrderDto.order_number,
          order_total_cost_ht: createOrderDto.order_total_cost_ht,
          order_total_quantity: createOrderDto.order_total_quantity,
          created_at: createOrderDto.created_at,
          deliver_at: createOrderDto.deliver_at,
          user_UUID: createOrderDto.user_UUID,
          product_UUID: createOrderDto.product_UUID,
        },
      }),
    );
    return createUser.toJSON();
  }

  public async getByOrderNumber(order_number: number) {
    return new NormalizedResponse(
      `Product for '${order_number}' uuid has been found`,
      await this.prisma.order.findUnique({
        where: {
     order_number: order_number,
        },
      }),
    ).toJSON();
  }

  public async updateByOrderNumber(order_number: number, updateOrdertDto: UpdateOrderDto) {
    return new NormalizedResponse(
      `Order for '${order_number}' uuid has been updated`,
      await this.prisma.order.update({
        where: {
          order_number: order_number,
        },
        data: {
          order_number: updateOrdertDto.order_number,
          order_total_cost_ht: updateOrdertDto.order_total_cost_ht,
          order_total_quantity: updateOrdertDto.order_total_quantity,
          created_at: updateOrdertDto.created_at,
          deliver_at: updateOrdertDto.deliver_at,
        },
      }),
    ).toJSON();
  }

  public async removeByOrderNumber(order_number: number) {
    return new NormalizedResponse(
      `Product for '${order_number} has been deleted'`,
      await this.prisma.order.delete({
        where: {
          order_number: order_number
        }
      }),
    ).toJSON();
  }
}