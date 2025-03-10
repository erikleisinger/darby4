# Asset Optimization

## ⛓️‍💥 Breakpoint widths for asset optimization

| Breakpoint | Width (px) |
| ---------- | ---------- |
| SM         | 600        |
| MD         | 768        |
| LG         | 1024       |
| XL         | 1280       |
| 2XL        | 1536       |
| 3XL        | 1920       |
| 4XL        | 3840       |

## 📷 Images & GIF's

### ❓ Tools

- [Image compression](https://imageresizer.com/image-compressor)
- [Image resizing](https://imageresizer.com)
- [Gif compression](https://ezgif.com/optimize)
- [Gif resizing](https://ezgif.com/resize)

### 🎯 Target image size

Images & GIF's should not be larger than 700kb.

**Ideally** images should be in the 1kb-300kb range for best performance.

### 🗚 Responsive variants

For all images, we a version for each screen width listed in ⛓️‍💥 **Breakpoints**. This is for two reasons:

- On a smaller screen, there's no reason to load an image that is larger than the screen size. This is unnecessary bandwidth used & potential performance hits with no payoff

- On mobile devices, data usage is often either limited or expensive. We want to make sure we're not unnecessarily racking up the user's data bill.

❗ **In the instance** where an image's width depends on the desktop/mobile layout (i.e. the images in the "work" cards are one width on all desktop views, and another width on all mobile views) then we can have **two** variants of the image:

- One variant that is the maximum width of the image on the desktop layout
- One variant that is the maximum width of the image on the mobile layout
