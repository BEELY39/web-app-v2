import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const formData = await prisma.devisRequest.findMany();
    return NextResponse.json(formData);
  } catch (error) {
    return NextResponse.json({ error: "Erreur lors de la récupération des données" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const newFormData = await prisma.devisRequest.create({
      data: {
        name: data.name,
        email: data.email,
        message: data.message,
      },
    });
    return NextResponse.json(newFormData);
  } catch (error) {
    return NextResponse.json({ error: "Erreur lors de la création des données" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const data = await request.json();
    const updatedFormData = await prisma.devisRequest.update({
      where: { id: data.id },
      data: {
        name: data.name,
        email: data.email,
        message: data.message,
      },
    });
    return NextResponse.json(updatedFormData);
  } catch (error) {
    return NextResponse.json({ error: "Erreur lors de la mise à jour des données" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: "ID manquant" }, { status: 400 });
    }
    await prisma.devisRequest.delete({
      where: { id: parseInt(id) },
    });
    return NextResponse.json({ message: "Élément supprimé avec succès" });
  } catch (error) {
    return NextResponse.json({ error: "Erreur lors de la suppression des données" }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const data = await request.json();
    const updatedFormData = await prisma.devisRequest.update({
      where: { id: data.id },
      data: data,
    });
    return NextResponse.json(updatedFormData);
  } catch (error) {
    return NextResponse.json({ error: "Erreur lors de la mise à jour partielle des données" }, { status: 500 });
  }
}
