from django.db import models
from django.utils.translation import gettext_lazy as _
from taggit.managers import TaggableManager
from taggit.models import GenericTaggedItemBase, TagBase

# Create your models here.
class ItemTag(TagBase):
    image = models.ImageField(
        upload_to='categories/',
        verbose_name='Изображение',
        blank=True
    )
    description = models.TextField(
        blank=True,
        verbose_name='Описание',
        )

    class Meta:
        verbose_name = _("Категория")
        verbose_name_plural = _("Категории")


class TaggedItem(GenericTaggedItemBase):
    tag = models.ForeignKey(
        ItemTag,
        on_delete=models.CASCADE,
        related_name="items",
        verbose_name='Категория',
    )

class Item(models.Model):
    title = models.CharField(max_length=200, verbose_name='Название',)
    slug = models.CharField(
        unique=True,
        max_length=50,
    )
    pub_date = models.DateTimeField(auto_now_add=True, verbose_name='Дата добавления',)
    price = models.DecimalField(
        max_digits=12,
        decimal_places=0,
        verbose_name='Цена в сутки',
    )
    is_available = models.BooleanField(
        default=True,
        verbose_name='Доступно',
    )
    tags = TaggableManager(through=TaggedItem, related_name="tagged_items", verbose_name='Категории',)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-price']
        verbose_name = 'Товар'
        verbose_name_plural = 'Товары'

class PostImage(models.Model):
    image = models.ImageField(upload_to='items/')
    product = models.ForeignKey(Item, on_delete=models.CASCADE, related_name='photos', verbose_name='Изображение', blank=True, )

    def __str__(self):
        return self.product.title